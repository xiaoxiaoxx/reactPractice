const menuList = [{
    title:'首页',
    key: '/home',
    icon: 'home'
},
{
    title: '商品',
    key: '/product',
    icon: 'appstore',
    children: [
        {
            title:'品类管理',
            key: '/category',
            icon: 'unordered-list'  
        },
        {
            title:'商品管理',
            key: '/product',
            icon: 'tool'
        }
    ]
},
{
    title:'用户管理',
    key: '/user',
    icon: 'user'
},{
    title:'角色管理',
    key: '/role',
    icon: 'safety-certificate'
},]