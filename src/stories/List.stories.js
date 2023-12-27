import List from './ListComponent.vue'
import ListItem from './ListItem.vue'

export default {
    component: List,
};

export const Empty = {
    render: () => ({
        components: { List },
        template: '<List/>',
    }),
};

export const OneItem = {
    render: () => ({
        components: { List, ListItem },
        template: `
      <List>
        <list-item/>
      </List>`,
    }),
};

export const ManyItems = {
    render: () => ({
        components: { List, ListItem },
        template: `
      <List>
        <list-item/>
        <list-item/>
        <list-item/>
      </List>`,
    }),
};
