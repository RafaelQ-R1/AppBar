import React from 'react'
import { Animated } from 'react-native'

export class FadeInView1 extends React.Component {
    state = {
        slideAnim: new Animated.Value(-400),

    }

    componentDidMount() {
        Animated.timing(this.state.slideAnim, { toValue: 0, duration: 200, },


        ).start();
    }

    render() {
        let { slideAnim } = this.state;

        return (
            <Animated.View
                style={{
                    ...this.props.style,
                    marginRight: slideAnim,

                }}
            >
                {this.props.children}
            </Animated.View>
        );
    }
}


export class FadeInView2 extends React.Component {
    state = {
        slideAnim: new Animated.Value(-400),

    }

    componentDidMount() {
        Animated.timing(this.state.slideAnim, { toValue: 0, duration: 600, },
        ).start();
        
     
    }

    render() {
        let { slideAnim } = this.state;

        return (
            <Animated.View
                style={{
                    ...this.props.style,
                    marginRight: slideAnim,

                }}
            >
                {this.props.children}
            </Animated.View>
        );
    }
}

export class FadeInView3 extends React.Component {
    state = {
        slideAnim: new Animated.Value(-400),

    }

    componentDidMount() {
        Animated.timing(this.state.slideAnim, { toValue: 0, duration: 900, },


        ).start();
    }

    render() {
        let { slideAnim } = this.state;

        return (
            <Animated.View
                style={{
                    ...this.props.style,
                    marginLeft: slideAnim,
                 
                }}
            >
                {this.props.children}
            </Animated.View>
        );
    }
}

export class FadeInView4 extends React.Component {
    state = {
        slideAnim: new Animated.Value(-400),

    }

    componentDidMount() {
        Animated.timing(this.state.slideAnim, { toValue: 0, duration: 900, },


        ).start();
    }

    render() {
        let { slideAnim } = this.state;

        return (
            <Animated.View
                style={{
                    ...this.props.style,
                    marginRight: slideAnim,
              

                }}
            >
                {this.props.children}
            </Animated.View>
        );
    }
}


export class FadeInView5 extends React.Component {
    state = {
        slideAnim: new Animated.Value(-400),

    }

    componentDidMount() {
        Animated.timing(this.state.slideAnim, { toValue: 0, duration: 900, },


        ).start();
    }

    render() {
        let { slideAnim } = this.state;

        return (
            <Animated.View
                style={{
                    ...this.props.style,
                    marginTop: slideAnim,

                }}
            >
                {this.props.children}
            </Animated.View>
        );
    }
}


