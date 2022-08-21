import { createSlice } from "@reduxjs/toolkit";
import Images from "../images";
import thumbs from "../thumbs";
const LightBox = createSlice({
    name: "cart",
    initialState: {
        images: Images,
        thumbs: thumbs,
        lightboxOpen:false
    },
    reducers: {
        openLightBox: (state) => {
            state.lightboxOpen = true
        },
        closeLightBox: (state) => {
            state.lightboxOpen = false
        }
    }
})

export const {openLightBox,closeLightBox} = LightBox.actions
export default LightBox.reducer;