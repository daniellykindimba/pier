const RouteWrapper = { render(h) {
        if(this.$route.path === "/")
            this.$router.replace("/" + window.models[0].name);

        return h('router-view');
    } 
};
const PierCMS = () => import('../UI/PierCMS');
// const AddModel = () => import('../UI/pages/Models/Add');
// const ModelDetail = () => import('../UI/pages/Models/Detail');

export default [
    {
        path: '/',
        name: 'PierCMS',
        component: RouteWrapper,
        children: [
            {
                path: ':modelName',
                name: 'Model',
                component: PierCMS,
                props: true
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