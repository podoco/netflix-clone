import React, { useEffect } from 'react'

const useOnClickOutside = (ref, handler) => {

  useEffect(() => {

    const listener = (event) => {
      console.log('ref', ref.current);
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      //dom 밖을 눌렀을때 핸들러 실행 (모달창 닫기)
      handler();
    };

    //돔부분 눌렸을 때 
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    }

  }, []);
};

export default useOnClickOutside;
