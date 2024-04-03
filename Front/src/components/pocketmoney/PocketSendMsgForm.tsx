import React, { FC, useState } from 'react';
import Header from "../common/Header";
import FullBtn from '../common/FullBtn';
import MsgBox from '../common/MsgBox';

interface Props {
  onNext: () => void;
}

const SendPocketMoneyMsgForm: FC<Props> = ({ onNext }) => {
    const [message, setMessage] = useState('');

  return (
    <div className="flex flex-col h-screen pb-60">
        <Header pageTitle="용돈 보내기" headerType="normal" headerLink="/" />
        <div className="flex-grow">
            <div>
                <div className="text-m mt-20 mb-32 text-center">
                    <span className="text-main m-2">이우철</span>님에게<br/>
                    <span className="text-main">1,000원</span>을 보낼게요            
                </div>

                <MsgBox onMessageChange={setMessage} />

                {/* 임시 추가 */}
                {message}


            </div>

            </div>
        <FullBtn buttonText="확인" onClick={onNext} />
    </div>
  );
}

export default SendPocketMoneyMsgForm;
