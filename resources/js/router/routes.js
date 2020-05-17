const DefaultContainer = () => import('../UI/DefaultContainer');
const Editor = () => import('../UI/pages/Editor');
const EditorList = () => import('../UI/pages/Editor/List');
const EditorAdd = () => import('../UI/pages/Editor/Add');

export default [
    {
        path: '/',
        name: 'Pier',
        redirect: '/editor',
        component: DefaultContainer,
        children: [
            {
                path: 'editor',
                name: 'Editor',
                component: Editor,
                redirect: '/editor/list',
                children: [
                    {
                        path: 'list',
                        name: 'EditorList',
                        component: EditorList
                    },
                    {
                        path: 'add',
                        name: 'EditorAdd',
                        component: EditorAdd
                    }
                ]
            }
        ]
    }
]