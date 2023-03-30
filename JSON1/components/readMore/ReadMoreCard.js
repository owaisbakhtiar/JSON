import React from "react";
import {StyleSheet, Text, View} from "react-native";
import Colors from "../constants/Colors";
import ReadMore from "./ReadMore";

const ReadMoreCardPM = (props) => {
    let {text, title, image, numberOfLines} = props;

    return (
        <View>
            {!!title && (
                <View>
                    <Text style={styles.header}>{props.title}</Text>
                </View>
            )}
            <View style={styles.card}>
                <View>
                    <ReadMore
                        image={image}
                        numberOfLines={numberOfLines || 2}
                        renderTruncatedFooter={_renderTruncatedFooter}
                        renderRevealedFooter={_renderRevealedFooter}
                        onReady={() => {
                        }}
                    >
                        <Text style={styles.cardText}>{text}</Text>
                    </ReadMore>
                </View>
            </View>
        </View>
    );
};

const _renderTruncatedFooter = (handlePress) => {
    return (
        <Text style={{fontSize: 16, color: Colors.primaryColor}} onPress={handlePress}>
            Read more
        </Text>
    );
};

const _renderRevealedFooter = (handlePress) => {
    return (
        <Text style={{fontSize: 16, color: Colors.primaryColor}} onPress={handlePress}>
            Show less
        </Text>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 0
    },
    header: {
        fontFamily: "open-sans",
        fontSize: 15,
        textAlign: "left",
        padding: 8
    },
    card: {
        marginHorizontal: 0,
        paddingBottom: 10
    },
    cardText: {
        fontSize: 16,
        lineHeight: 19
    }
});

export default ReadMoreCardPM;
