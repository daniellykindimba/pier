const PierCMSWrapper = () => import('../UI/PierCMSWrapper');
const PierCMSList = () => import('../UI/PierCMS');
const Detail = () => import('../UI/Detail');
const AddRow = () => import('../UI/AddRow');
const DeleteRow = () => import('../UI/DeleteRow');
const PierCMSContent = {
    template: `<router-view />`
};

export default [
    {
        path: '/',
        name: 'PierCMS',
        component: PierCMSWrapper,
        children: [
            {
                path: '/:modelName',
                redirect: '/:modelName/list/',
                name: 'Model',
                component: PierCMSContent,
                children: [
                    {
                        path: '/:modelName/list/',
                        name: 'Model List',
                        component: PierCMSList,
                        props: true,
                        children: [
                            {
                                path: '/:modelName/list/add',
                                name: 'Add Row',
                                component: AddRow
                            },
                            {
                                path: '/:modelName/list/:rowId/delete',
                                name: 'Delete Row',
                                component: DeleteRow,
                                props: true
                            }
                        ]
                    },
                    {
                        path: '/:modelName/detail/:rowId/',
                        name: 'View Row',
                        component: Detail,
                        props: true
                    },
                ]
            }
        ]
    }
]