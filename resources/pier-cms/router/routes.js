const PierCMSWrapper = () => import('../UI/PierCMSWrapper');
const PierCMS = () => import('../UI/PierCMS');
const DeleteRow = () => import('../UI/DeleteRow');
// const AddModel = () => import('../UI/pages/Models/Add');
// const ModelDetail = () => import('../UI/pages/Models/Detail');

export default [
    {
        path: '/',
        name: 'PierCMS',
        component: PierCMSWrapper,
        children: [
            {
                path: '/:modelName',
                name: 'Model',
                component: PierCMS,
                props: true,
                children: [
                    {
                        path: '/:modelName/:rowId/delete',
                        name: 'Delete Row',
                        component: DeleteRow,
                        props: true
                    }
                ]
            },
            // {
            //     path: 'add',
            //     name: 'AddModel',
            //     component: AddModel
            // },
            // {
            //     path: ':modelId/details',
            //     name: 'Model Details',
            //     component: ModelDetail,
            //     props: true
            // }

        ]
    }
]