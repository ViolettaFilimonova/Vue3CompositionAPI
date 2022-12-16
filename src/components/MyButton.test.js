import { render , screen} from '@testing-library/vue';
import MyButton from '../components/MyButton.vue';

test('MyButton expect', () => {
    const {debug} = render(MyButton)
    // console.log(prettyDom());
    debug()
    
})
// import { render} from '@testing-library/vue';
// import MyButton from './MyButton.vue';

// test('renders with label', () => {
//   render(MyButton)
// })