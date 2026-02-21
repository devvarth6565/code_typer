import { useState, useRef, useEffect, useCallback } from 'react';

export default function TypingArea() {
  const [userInput, setUserInput] = useState('');
  const [targetCode, setTargetCode] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const inputRef = useRef(null);

  const fetchSnippet = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:8080/api/snippet/random');
      const data = await response.json();
      setTargetCode(data.snippet);
      setUserInput('');
    } catch (error) {
      console.error("Failed to fetch snippet:", error);
      setTargetCode("Error connecting to server. Please ensure backend is running.");
    } finally {
      setIsLoading(false);
      if (inputRef.current) inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    fetchSnippet();
  }, [fetchSnippet]);

  useEffect(() => {
    if (targetCode && userInput.length === targetCode.length) {
      fetchSnippet();
    }
  }, [userInput, targetCode, fetchSnippet]);

  const handleBoxClick = () => {
    if (inputRef.current) inputRef.current.focus();
  };

  // THE NEW MAGIC: Auto-Teleport over indentation
  const handleInputChange = (e) => {
    let val = e.target.value;
    
    // Only auto-assist if the user is typing forward (not backspacing)
    if (val.length > userInput.length) {
      let i = val.length;
      
      // If the very next character they are supposed to type is a line break (\n)
      if (targetCode[i] === '\n') {
          // Fast-forward through the line break and all the spaces that follow it
          while (i < targetCode.length) {
              if (targetCode[i] === '\n') {
                  val += '\n';
              } else if (targetCode[i] === ' ') {
                  val += ' ';
              } else {
                  break; // Stop instantly when we hit a real letter/symbol
              }
              i++;
          }
      }
    }
    
    setUserInput(val);
  };

  // Prevent the physical Enter key from messing up our clean auto-teleport logic
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); 
    }
  };

  if (isLoading) {
    return (
      <div className="w-full p-8 bg-black rounded-xl border border-zinc-800 shadow-2xl flex justify-center items-center h-48">
        <span className="text-zinc-500 text-xl animate-pulse">Loading snippet...</span>
      </div>
    );
  }

  return (
    <div 
      className="relative w-full p-8 bg-black rounded-xl border border-zinc-800 shadow-2xl text-2xl leading-loose tracking-wider cursor-text"
      onClick={handleBoxClick}
    >
      <textarea 
        ref={inputRef}
        value={userInput}
        onChange={handleInputChange} // Attached the new teleport logic here
        onKeyDown={handleKeyDown}    // Attached the Enter blocker here
        className="absolute inset-0 w-full h-full opacity-0 resize-none"
        autoFocus
        spellCheck="false"
        autoComplete="off"
        maxLength={targetCode ? targetCode.length : undefined} 
      />

      <div className="pointer-events-none select-none whitespace-pre-wrap font-mono">
        {targetCode.split('').map((char, index) => {
          let colorClass = 'text-zinc-600'; 

          if (index < userInput.length) {
            if (userInput[index] === char) {
              colorClass = 'text-zinc-100'; 
            } else {
              // Made the red slightly brighter so it's easier to spot mistakes!
              colorClass = 'text-red-400 bg-red-900/40 rounded-sm'; 
            }
          }

          return <span key={index} className={colorClass}>{char}</span>;
        })}
      </div>
    </div>
  );
}