export default
{
    nodes: [
        {
            name: 'Artificial Intelligence',
            id: 'AI',
            opened: false,
            collapsible: true,
            childNodes: ['EI_1', 'EI_2'],
            position: {top: 150, left: 200}
        },
        {
            name: 'Engine Intelligence',
            id: 'EI_1',
            collapsible: false,
            position: {top: -60, left: 200}
        },
        {
            name: 'Engine Intelligence',
            id: 'EI_2',
            opened: false,
            collapsible: true,
            childNodes: ['Nln', 'HP'],
            position: {top: 60, left: 200}
        },
        {
            name: 'Neuro-like networks',
            id: 'Nln',
            opened: true,
            collapsible: false,
            childNodes: ['Hm'],
            position: {top: -60, left: 200}
        },
        {
            name: 'Heuristic Programming',
            id: 'HP',
            opened: true,
            collapsible: false,
            childNodes: ['Hm'],
            position: {top: 60, left: 200}
        },
        {
            name: 'Heuristic modeling',
            id: 'Hm',
            collapsible: false,
            position: {top: 60, left: 200},
            otherParentsIds: ['HP']
        }
    ]
}
