const DefaultContainer = () => import('../UI/DefaultContainer');
const Models = () => import('../UI/pages/Models');
const ModelsList = () => import('../UI/pages/Models/List');
const AddModel = () => import('../UI/pages/Models/Add');
const ModelDetail = () => import('../UI/pages/Models/Detail');

export default [
    {
        path: '/',
        name: 'Pier',
        redirect: '/models',
        component: DefaultContainer,
        children: [
            {
                path: 'models',
                name: 'Models',
                component: Models,
                // redirect: '/models/list',
                children: [
                    {
                        // path: 'list',
                        path: '/',
                        name: 'ModelsList',
                        component: ModelsList
                    },
                    {
                        path: 'add',
                        name: 'AddModel',
                        component: AddModel
                    },
                    {
                        path: ':modelId/details',
                        name: 'Model Details',
                        component: ModelDetail,
                        props: true
                    }
                ]
            }
        ]
    }
]