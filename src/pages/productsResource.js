export const productColumn = [
    { field: 'id', headerName: 'STT', width: 70 },
    {
        field: 'title',
        headerName: 'Tiêu đề',
        width: 500,
        renderCell:(params) =>{
            return(
                <div className="cellWithImg">
                    <img src={params.row.image} alt={params.row.title} className="cellImg"/>
                    {params.row.title}
                </div>
            );
        }
    },
    { field: 'price', headerName: 'Giá', width: 130 },
    { field: 'category', headerName: 'Chuyên mục', width: 200, }


];
export const productRow = [
    {
        id:1,
        title:"Điện thoại Samsung Galaxy Z Flip4 128GB",
        image:"https://cdn.tgdd.vn/Products/Images/42/258047/samsung-galaxy-z-flip4-5g-128gb-thumb-600x600.jpg",
        price:20990000,
        category:"Điện thoại sam sung"
    },
    {
        id:2,
        title:"Samsung Galaxy S22 Ultra 5G",
        image:"https://cdn.tgdd.vn/Products/Images/42/235838/samsung-galaxy-s22-ultra-090222-104147-600x600.jpg",
        price:25990000,
        category:"Điện thoại sam sung"
    },
    {
        id:3,
        title:"Samsung Galaxy A23",
        image:"https://cdn.tgdd.vn/Products/Images/42/262650/samsung-galaxy-a23-trang-thumb-600x600.jpg",
        price:5490000,
        category:"Điện thoại sam sung"
    },
    {
        id:4,
        title:"Samsung Galaxy Z Fold4 5G",
        image:"https://cdn.tgdd.vn/Products/Images/42/250625/samsung-galaxy-z-fold4-120822-014401-600x600.jpg",
        price:37990000,
        category:"Điện thoại sam sung"
    },
    {
        id:5,
        title:"Samsung Galaxy Z Fold3 5G",
        image:"https://cdn.tgdd.vn/Products/Images/42/226935/samsung-galaxy-z-fold-3-silver-1-600x600.jpg",
        price:31990000,
        category:"Điện thoại sam sung"
    },
    {
        id:6,
        title:"iPhone 11",
        image:"https://cdn.tgdd.vn/Products/Images/42/153856/iphone-xi-xanhla-600x600.jpg",
        price:11990000,
        category:"Điện thoại iphone"
    },
    {
        id:7,
        title:"iPhone 13 Pro Max",
        image:"https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-xanh-la-thumb-1-600x600.jpg",
        price:28490000,
        category:"Điện thoại iphone"
    },
]