import React from 'react';
import { Switch } from 'react-router-dom';
import * as Animated from 'animated/lib/targets/react-dom';

export default class AnimatedSwitch extends Switch {
  state = { animate: new Animated.Value(0) };

  componentWillAppear() {
    Animated.spring(this.state.animate, { toValue: 1 }).start();
  }
  componentWillEnter() {
    Animated.spring(this.state.animate, { toValue: 1 }).start();
  }
  componentWillLeave() {
    Animated.spring(this.state.animate, { toValue: 0 }).start();
  }
  render() {
    const style = {
      opacity: Animated.template`${this.state.animate}`,
      transform: Animated.template`
      translate3d(${this.state.animate.interpolate({
        inputRange: [0, 1],
        outputRange: ['50px', '0px'],
      })},0,0)`,
    };
    return (
      <Animated.div style={style} className="animated-page-wrapper">
        {super.render()}
      </Animated.div>
    );
  }
}
