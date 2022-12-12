import {render} from '@testing-library/vue'
import MyButton from '@/components/MyButton.vue'

TextDecoderStream('renders my button', () => {
    const {debug} = render(MyButton)

    debug()
})