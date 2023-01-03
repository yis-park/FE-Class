import Ex2Modal from "./Ex2Modal";
import React, { useState } from "react";

function Ex2(props) {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => {
    setIsOpen(false);
  };

  const onOpen = () => {
    setIsOpen(true);
  };
  return (
    <div>
      <button onClick={onOpen}>모달 창 열기</button>

      {/* 버튼을 누르면 모달창 열림 */}

      {isOpen && <Ex2Modal onClose={onClose} />}
    </div>
  );
}

export default Ex2;
