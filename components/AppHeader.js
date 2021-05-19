import React from 'react';
import { Header, Icon, Badge } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const AppHeader = (props) => {
    return(
        <SafeAreaProvider>
          <Header 
            backgroundColor = '#EAF8FE'
            centerComponent = {{
                text: props.title,
                style: { color: '#90A5A9', fontSize: 20, fontWeight: 'bold' }
           }}/>
        </SafeAreaProvider>
    )
}

export default AppHeader;