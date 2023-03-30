import React, {useEffect, useRef, useState} from "react";
import {Image, Platform, StyleSheet, Text, View} from "react-native";

export const ReadMoreFunctional = (props) => {

    let [measured, setMeasured] = useState(false);
    const textRef = useRef(null);

    let [shouldShowReadMore, setShouldShowReadMore] = useState(false);
    let [showAllText, setShowAllText] = useState(false);

    let {numberOfLines, onReady, renderTruncatedFooter, renderRevealedFooter} = props;

    useEffect(() => {
        const initReadMore = async () => {
            const fullHeight = await measureHeightAsync(textRef.current);
            await nextFrameAsync();

            setMeasured(true);
            const limitedHeight = await measureHeightAsync(textRef.current);

            if (fullHeight > limitedHeight) {
                setShouldShowReadMore(true);
            }
        };

        initReadMore().then(() => onReady && onReady());
    }, [measured]);

    const _handlePressReadMore = () => setShowAllText(true);

    const _handlePressReadLess = () => setShowAllText(false);

    const _maybeRenderReadMore = () => {
        if (shouldShowReadMore && !showAllText) {
            if (renderTruncatedFooter) {
                return renderTruncatedFooter(_handlePressReadMore);
            }

            return (
                <Text style={styles.button} onPress={_handlePressReadMore}>
                    Read more
                </Text>
            );
        } else if (shouldShowReadMore && showAllText) {

            if (renderRevealedFooter) {
                renderRevealedFooter(_handlePressReadLess);
            }

            return (
                <Text style={styles.button} onPress={this._handlePressReadLess}>
                    Hide
                </Text>
            );
        }
    };

    return (
        <View>
            <Text
                numberOfLines={measured && !showAllText ? numberOfLines : 0}
                ref={textRef}
            >
                {props.children}
            </Text>

            {_maybeRenderReadMore()}
        </View>
    );

};

const measureHeightAsync = (component) => {
    return new Promise(resolve => {
        if (Platform.OS === 'android') {
            component.measureInWindow((x, y, w, h) => {
                resolve(h);
            });
        } else {
            component.measure((x, y, w, h) => {
                resolve(h);
            });
        }
    });
};

const nextFrameAsync = () => {
    return new Promise(resolve => requestAnimationFrame(() => resolve()));
};

const styles = StyleSheet.create({
    button: {
        color: "#888",
        marginTop: 5
    }
});


export default class ReadMore extends React.Component {
    state = {
        measured: false,
        shouldShowReadMore: false,
        showAllText: false
    };

    async componentDidMount() {
        this._isMounted = true;
        await nextFrameAsync();

        if (!this._isMounted) {
            return;
        }

        // Get the height of the text with no restriction on number of lines
        const fullHeight = await measureHeightAsync(this._text);
        this.setState({measured: true});
        await nextFrameAsync();

        if (!this._isMounted) {
            return;
        }

        // Get the height of the text now that number of lines has been set
        const limitedHeight = await measureHeightAsync(this._text);

        if (fullHeight > limitedHeight) {
            this.setState({shouldShowReadMore: true}, () => {
                this.props.onReady && this.props.onReady();
            });
        } else {
            this.props.onReady && this.props.onReady();
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        let {measured, showAllText} = this.state;

        let {numberOfLines} = this.props;

        return (
            <View>
                <Text
                    numberOfLines={measured && !showAllText ? numberOfLines : 0}
                    maxFontSizeMultiplier={2}
                    allowFontScaling={true}
                    ref={text => {
                        this._text = text;
                    }}
                >
                    {this.props.children}
                </Text>
                {
                    showAllText ?
                        this.props.image ?
                            <Image
                                source={this.props.image}
                                style={{flex: 1, margin: 15, alignSelf: 'center'}}
                            /> : null
                        : null
                }

                {this._maybeRenderReadMore()}
            </View>
        );
    }

    _handlePressReadMore = () => {
        this.setState({showAllText: true});
    };

    _handlePressReadLess = () => {
        this.setState({showAllText: false});
    };

    _maybeRenderReadMore() {
        let {shouldShowReadMore, showAllText} = this.state;

        if (shouldShowReadMore && !showAllText) {
            if (this.props.renderTruncatedFooter) {
                return this.props.renderTruncatedFooter(this._handlePressReadMore);
            }

            return (
                <Text style={styles.button} onPress={this._handlePressReadMore}>
                    Read more
                </Text>
            );
        } else if (shouldShowReadMore && showAllText) {
            if (this.props.renderRevealedFooter) {
                return this.props.renderRevealedFooter(this._handlePressReadLess);
            }

            return (
                <Text style={styles.button} onPress={this._handlePressReadLess}>
                    Hide
                </Text>
            );
        }
    }
}
