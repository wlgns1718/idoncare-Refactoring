// import * as React from "react";
// import DaumPostcode from "react-daum-postcode";

const SignupAddress = (): JSX.Element => {
  /**
   * useState
   */
  // const [openPostcode, setOpenPostcode] = React.useState<boolean>(false);

  /**
   * handler
   */
  const handle = {
    // 버튼 클릭 이벤트
    clickButton: () => {
      // setOpenPostcode((current) => !current);
    },

    // 주소 선택 이벤트
    // selectAddress: (data: any) => {
    //   console.log(`
    //             주소: ${data.address},
    //             우편번호: ${data.zonecode}
    //         `);
    //   setOpenPostcode(false);
    // },
  };

  return (
    <div>
      <button onClick={handle.clickButton}>toggle</button>
      {/* 
      {openPostcode && (
        <DaumPostcode
          onComplete={handle.selectAddress} // 값을 선택할 경우 실행되는 이벤트
          autoClose={false} // 값을 선택할 경우 사용되는 DOM을 제거하여 자동 닫힘 설정
          defaultQuery="삼성 청년 SW 아카데미" // 팝업을 열때 기본적으로 입력되는 검색어
        />
      )} */}
    </div>
  );
};

export default SignupAddress;
