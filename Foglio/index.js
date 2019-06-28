import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-360';
import designer from './data/foglioData'

export default class Foglio extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Designer
          </Text>
          <Text>
            { designer.Designer.designerName }
          </Text>
        </View>

        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Collection
          </Text>
          <Text>
            { designer.Designer.info }
          </Text>
        </View>
      </View>
    );
  }
};
const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#000000',
    borderWidth: 2,
  },
});

AppRegistry.registerComponent('Foglio', () => Foglio);
