import React, {
  useImperativeHandle,
  useRef,
  useEffect,
  forwardRef,
} from 'react';

const FancyInput = forwardRef((props, ref) => {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.value = 'Hello';
    },
  }));
  return <input ref={inputRef} />;
});

export default () => {
  let ref = useRef(null);
  useEffect(() => {
    console.log(ref);
    ref.current.focus();
  });
  return (
    <>
      <FancyInput ref={ref} />
    </>
  );
};
