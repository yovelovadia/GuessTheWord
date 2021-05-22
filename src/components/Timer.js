import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { textStyles, colors } from '@styles';

const Timer = ({ time }) => {
  const [timerColor, setTimerColor] = useState('green');

  useEffect(() => {
    if (time > 20) setTimerColor(colors.lightGreen);
    else if (time > 15) setTimerColor(colors.yellow);
    else if (time > 10) setTimerColor(colors.orange);
    else setTimerColor(colors.red);
  }, [time]);

  return (
    <Text style={{ ...textStyles.bigTextBlack, color: timerColor }}>
      {time}
    </Text>
  );
};

export default Timer;
