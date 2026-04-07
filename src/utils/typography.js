import { Text, View } from "react-native";
import { useFonts } from '@expo-google-fonts/dm-sans/useFonts';
import { DMSans_100Thin } from '@expo-google-fonts/dm-sans/100Thin';
import { DMSans_200ExtraLight } from '@expo-google-fonts/dm-sans/200ExtraLight';
import { DMSans_300Light } from '@expo-google-fonts/dm-sans/300Light';
import { DMSans_400Regular } from '@expo-google-fonts/dm-sans/400Regular';
import { DMSans_500Medium } from '@expo-google-fonts/dm-sans/500Medium';
import { DMSans_600SemiBold } from '@expo-google-fonts/dm-sans/600SemiBold';
import { DMSans_700Bold } from '@expo-google-fonts/dm-sans/700Bold';
import { DMSans_800ExtraBold } from '@expo-google-fonts/dm-sans/800ExtraBold';
import { DMSans_900Black } from '@expo-google-fonts/dm-sans/900Black';
import { DMSans_100Thin_Italic } from '@expo-google-fonts/dm-sans/100Thin_Italic';
import { DMSans_200ExtraLight_Italic } from '@expo-google-fonts/dm-sans/200ExtraLight_Italic';
import { DMSans_300Light_Italic } from '@expo-google-fonts/dm-sans/300Light_Italic';
import { DMSans_400Regular_Italic } from '@expo-google-fonts/dm-sans/400Regular_Italic';
import { DMSans_500Medium_Italic } from '@expo-google-fonts/dm-sans/500Medium_Italic';
import { DMSans_600SemiBold_Italic } from '@expo-google-fonts/dm-sans/600SemiBold_Italic';
import { DMSans_700Bold_Italic } from '@expo-google-fonts/dm-sans/700Bold_Italic';
import { DMSans_800ExtraBold_Italic } from '@expo-google-fonts/dm-sans/800ExtraBold_Italic';
import { DMSans_900Black_Italic } from '@expo-google-fonts/dm-sans/900Black_Italic';

export default () => {

  let [fontsLoaded] = useFonts({
    DMSans_100Thin, 
    DMSans_200ExtraLight, 
    DMSans_300Light, 
    DMSans_400Regular, 
    DMSans_500Medium, 
    DMSans_600SemiBold, 
    DMSans_700Bold, 
    DMSans_800ExtraBold, 
    DMSans_900Black, 
    DMSans_100Thin_Italic, 
    DMSans_200ExtraLight_Italic, 
    DMSans_300Light_Italic, 
    DMSans_400Regular_Italic, 
    DMSans_500Medium_Italic, 
    DMSans_600SemiBold_Italic, 
    DMSans_700Bold_Italic, 
    DMSans_800ExtraBold_Italic, 
    DMSans_900Black_Italic
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "DMSans_100Thin"
        }}>
          DM Sans Thin
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "DMSans_200ExtraLight"
        }}>
          DM Sans Extra Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "DMSans_300Light"
        }}>
          DM Sans Light
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "DMSans_400Regular"
        }}>
          DM Sans Regular
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "DMSans_500Medium"
        }}>
          DM Sans Medium
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "DMSans_600SemiBold"
        }}>
          DM Sans Semi Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "DMSans_700Bold"
        }}>
          DM Sans Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "DMSans_800ExtraBold"
        }}>
          DM Sans Extra Bold
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "DMSans_900Black"
        }}>
          DM Sans Black
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "DMSans_100Thin_Italic"
        }}>
          DM Sans Thin Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "DMSans_200ExtraLight_Italic"
        }}>
          DM Sans Extra Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "DMSans_300Light_Italic"
        }}>
          DM Sans Light Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "DMSans_400Regular_Italic"
        }}>
          DM Sans Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "DMSans_500Medium_Italic"
        }}>
          DM Sans Medium Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "DMSans_600SemiBold_Italic"
        }}>
          DM Sans Semi Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "DMSans_700Bold_Italic"
        }}>
          DM Sans Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "DMSans_800ExtraBold_Italic"
        }}>
          DM Sans Extra Bold Italic
        </Text>
        <Text style={{
          fontSize,
          paddingVertical,
          // Note the quoting of the value for `fontFamily` here; it expects a string!
          fontFamily: "DMSans_900Black_Italic"
        }}>
          DM Sans Black Italic
        </Text>
      </View>
    );
  }
};