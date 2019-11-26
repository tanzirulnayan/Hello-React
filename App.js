import React, {Component} from 'react';
import {
  Text,
  ScrollView,
  TextInput,
  Button,
  View,
  Image,
  StyleSheet,
  Alert,
} from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
    this.setState();
    this.state.customStyle = {
      color: '#E91E63',
    };
    setInterval(() => {
      if (this.state.customStyle.color === '#E91E63') {
        this.setState({
          customStyle: {
            color: '#4CAF50',
          },
        });
      } else {
        this.setState({
          customStyle: {
            color: '#E91E63',
          },
        });
      }
    }, 1000);
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Image
            style={styles.reactLogo}
            source={{
              uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
            }}
          />
          <Text style={[styles.welcome, this.state.customStyle]}>Yo, man! Login korba naki?</Text>
          <TextInput style={styles.textInput} />
          <TextInput style={styles.textInput} />
          <Button
            title="Login"
            onPress={() => Alert.alert('Chill! Pera nai.')}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#E91E63',
  },
  reactLogo: {
    height: 50,
    width: 50,
    marginTop: 150,
    marginBottom: 50,
  },
  textInput: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
  },
});

// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */
//
// import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';
//
// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
//
// const App: () => React$Node = () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}>
//           <Header />
//           {global.HermesInternal == null ? null : (
//             <View style={styles.engine}>
//               <Text style={styles.footer}>Engine: Hermes</Text>
//             </View>
//           )}
//           <View style={styles.body}>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Hello, React Native!</Text>
//               <Text style={styles.sectionTitle}>Step One</Text>
//               <Text style={styles.sectionDescription}>
//                 Edit - [Description Section] <Text style={styles.highlight}>App.js [Highlight]</Text> to change this
//                 change this screen and then come back to see your edits.
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>See Your Changes</Text>
//               <Text style={styles.sectionDescription}>
//                 <ReloadInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Debug</Text>
//               <Text style={styles.sectionDescription}>
//                 <DebugInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Learn More</Text>
//               <Text style={styles.sectionDescription}>
//                 Read the docs to discover what to do next:
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>AIUB Events</Text>
//               <Text style={styles.sectionDescription}>
//                 The Department of Marketing, Faculty of Business Administration
//                 organized an event entitled ‘Practicing International Trade” for
//                 the students of Global Trade at Lawn between Annex 4 and Annex
//                 5, Permanent Campus of the university on November 11, 2019. The
//                 purpose of the event was to provide an opportunity to the
//                 students to acquire knowledge and skills to promote and sell
//                 local products in different international marketplaces. 14 teams
//                 from different sections of Global Trade course attended the
//                 event with high sincerity and very positive attitude. Each team
//                 represented a district of our country. They brought some unique
//                 items from that representing districts and tried to promote and
//                 sell those unique items in the event with a hypothetical
//                 international marketplace. The event was inaugurated by Prof.
//                 Dr. Charles C. Villanueva, Vice President Academics and Dean,
//                 Faculty of Business Administration. Dr. Tajul Islam, Dean
//                 Faculty of Arts and Social Science; Ms. Farheen Hassan,
//                 Associate Professor & Director, BBA Program; Dr. Khondaker
//                 Sazzadul Karim, Associate Professor and Head, Department of
//                 Marketing were also present during the inauguration program.
//                 They visited all stalls and shared their valuable ideas and
//                 guidelines to all teams. A good number of faculty members from
//                 different departments, campus officials and thousands of
//                 students were also visited the event. This event entitled
//                 ‘Practicing International Trade” is a unique concept that aims
//                 to help young BBA student enthusiasts to become the future
//                 business leaders in Bangladesh. The event was highly appreciated
//                 by all participants, visitors (both students and faculties), and
//                 other officials of the university. Dr. Partha Prasad Chowdhury,
//                 Senior Associate Professor, Course Coordinator and Convener,
//                 Department of Marketing; Dr. Sahin Akter Sarker, Associate
//                 Professor and Convener, Department of Marketing; Mr. A.K.M.
//                 Kamrul Haque, Sr. Assistant Professor; and Mr. Mahir Abrar,
//                 Faculty from the Department of Marketing organized this event.
//                 TV24 covered the event and conducted some interviews to the
//                 guests and students. The whole event was also shown on
//                 television as a result of the coverage. This has added value,
//                 significance and promotion about the FBA and the university as a
//                 whole.
//               </Text>
//             </View>
//             {/*<View>*/}
//               {/*<Blink text='I love to Blink!' />*/}
//             {/*</View>*/}
//             <LearnMoreLinks />
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };
//
// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });
//
// export default App;
