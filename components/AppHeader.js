import React from 'react';
import { Header, Icon, Badge } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DrawerActions } from 'react-navigation-drawer';
import { withNavigation } from 'react-navigation';

const AppHeader = (props) => {
    return(
        <SafeAreaProvider>
          <Header 
            backgroundColor = '#EAF8FE'

            centerComponent = {{
                text: props.title,
                style: { color: '#90A5A9', fontSize: 20, fontWeight: 'bold' }
           }}

           leftComponent = { <Icon 
                               name = 'bars'
                               type = 'font-awesome'
                               color = '#696969'
                               onPress = {()=>{
                                   props.navigation.dispatch(DrawerActions.toggleDrawer());
                               }} />}
           />
        </SafeAreaProvider>
    )
}

export default withNavigation(AppHeader);