import Trangchu from "./components/Trangchu";
import Ketqua from "./components/Ketqua";
import Thongke from "./components/Thongke";
import Congdong from "./components/Congdong";

export default [
    {
        path: "/",
        component: Trangchu,
        exact: true,
    },
    {
        path: "/ket-qua-mien-nam",
        component: Ketqua,
    },
    {
        path: "/ket-qua-mien-trung",
        component: Ketqua,
    },
    {
        path: "/ket-qua-mien-bac",
        component: Ketqua,
    },
    {
        path: "/thong-ke",
        component: Thongke,
    },
    {
        path: "/cong-dong",
        component: Congdong,
    },
];
