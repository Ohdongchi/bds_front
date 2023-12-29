import { mainMenu } from "../../../types/ThemeData";

export const Menu = () => {
    return <>
        <ul className="main">
            {
                mainMenu.map((m,index)=>{
                    return <li onClick={}><label></label></li>>;
                })
            }
            <li>
                <label htmlFor="">
                    예약 대장
                </label>
            </li>
            <li>
                <label htmlFor="">
                    미수 관리
                </label>
            </li>
            <li><label>운행 현황표</label></li>
            <li><label>기본 정보</label></li>
            <li><label>Log-out</label></li>
        </ul>
    </>;

}