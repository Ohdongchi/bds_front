import { subMenuTypes } from "./DataTypes";

export const subMenu: subMenuTypes[] = [
    {
        key: 0,
        list: ["배차등록", "확정배차 일정표", "일반예약현황", "통근예약현황", "거래명세서", "투어운행일지", "가이드SMS", "기사님SMS"],
        data: [
            { url: "/rev/reg", keyword: "배차등록" },
            { url: "/rev/ds", keyword: "확정배차 일정표" },
            { url: "/rev/grs", keyword: "일반예약현황" },
            { url: "rev/crs", keyword: "통근예약현황" },
            { url: "rev/ts", keyword: "거래명세서" },
            { url: "/rev/tol", keyword: "투어운행일지" },
            { url: "/rev/sms", keyword: "SMS" }
        ]
    }, {
        key: 1,
        list: ["미수금 상세", "입금 현황", "대차료 미지급", "대차료 지급",
            "급여대장", "운행내역 및 경비", "지출경비항목", "지출경비내역",
            "일반입금항목", "일반입금내역"],
        data: [
            { url: "/misu/oad", keyword: "미수금 상세" },
            { url: "/misu/ds", keyword: "입금 현황" },
            { url: "/misu/roup", keyword: "대차료 미지급" },
            { url: "/misu/rop", keyword: "대차료 지급" },
        ]
    }, {
        key: 2,
        list: ["운행현황표", "수고비내역", "기사별수고비집계", "차량별누계", "거래처별누계"],
    }, {
        key: 3,
        list: ["차량정보", "가이드정보", "거래처정보", "사용자관리", "결재라인", "휴일정보", "SMS문자발신번호"],
    }
];

export const mainMenu: String[] = ["예약대장", "미수관리", "운행 현황표", "기본정보"];