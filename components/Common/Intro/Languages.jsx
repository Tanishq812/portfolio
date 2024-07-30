import { Progress } from "antd";
import { useEffect, useState } from "react";

const Languages = () => {
    const [urdu, setUrdu] = useState(0);
    const [english, setEnglish] = useState(0);
    const [marathi, setMarathi] = useState(0);
    const [german, setGerman] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            if (urdu < 95) {
                setUrdu(prevCount => prevCount + 1);
            }
            if (english < 94) {
                setEnglish(prevCount => prevCount + 1);
            }
            if (marathi < 98) {
                setMarathi(prevCount => prevCount + 1);
            }
            if (german < 80) {
                setGerman(prevCount => prevCount + 1);
            }
        }, 30);

        return () => clearInterval(timer);
    }, [urdu, english, marathi, german]);

    return (
        <div className="flex flex-col space-y-1 pt-6">
            <div className="flex flex-col gap-y-4">
                <span className='text-Snow text-xs font-bold'>Languages</span>
                <div className="flex flex-row items-center justify-center space-x-6">
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#1fdf64" type="circle" percent={urdu} size={75} />
                        <span className='text-xs font-bold text-Snow'>Hindi</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#1fdf64" type="circle" percent={english} size={75} />
                        <span className='text-xs font-bold text-Snow'>English</span>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-center space-x-6">
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#1fdf64" type="circle" percent={marathi} size={75} />
                        <span className='text-xs font-bold text-Snow'>Marathi</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#1fdf64" type="circle" percent={german} size={75} />
                        <span className='text-xs font-bold text-Snow'>German</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Languages;
