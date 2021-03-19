import { useState } from 'react';

export default function useVisualMode(init) {
  const [mode, setMode] = useState(init);
  const [history, setHistory] = useState([init]);

  const transition = (newMode, replace = false) => {
    if (replace) {
      history.pop();
      setMode(newMode);
    }
    setMode(newMode);
    const newHist = [...history];
    newHist.push(newMode);
    setHistory(newHist);
  };
  const back = () => {
    if (history.length < 2) {
      return;
    }
    setMode(history[history.length-2]);
    setHistory(prev => prev.slice(0, -1));
  };
  
  return {mode, transition, back, history};
}
