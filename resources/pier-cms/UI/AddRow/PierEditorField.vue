<style scoped>
/* label{
        display: block;
        margin-bottom: 0.1em;
    }

    label:first-letter{
        text-transform: uppercase;
    }

    input, select, textarea{
        background: transparent;
        -webkit-appearance: none;
        box-sizing: border-box;
        padding: 0.3em 0.5em;
        font-size: 1.25em;
        width: 100%;
        border: 1px solid #ddd !important;
        resize: none;
    }

    select{
        background: #fff url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='%23999'><polygon points='0,0 100,0 50,50'/></svg>") no-repeat scroll 96.5% 60%;
        background-size: 12px;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    } */
</style>

<template>
  <div class="input-group">
    <template v-if="field">
        <label v-if="!nolabel && field.type !== 'image' && field.type !== 'video'" 
          class="capitalize" :for="field.label">
          {{ field.label.replace(/_/g, ' ') }}
        </label>

        <!-- image-upload-url="upload_image.php" -->

        <bc-image-field
          v-if="field.type == 'image'" 
          :label="field.label"
          v-model="val"
          :url="val"
          :unsplash-client-id="UNSPLASH_CLIENT_ID"
        />

        <bc-youtube-field
          v-else-if="field.type == 'video'" 
          :label="field.label"
          v-model="val"
          :url="val"
          :youtube-api-key="YOUTUBE_API_KEY"
        />

        <vue-star-rating v-else-if="field.type === 'rating'"
          active-color="#e9b531" 
          :increment="0.5"
          :max-rating="parseInt(field.meta.outOf)" 
          :star-size="28"
          v-model="val"
        />

        <textarea v-else-if="field.type === 'long text'"
          ref="longTextInput" 
          rows="1" 
          v-model="val" 
        />

        <input v-else
            :id="field.label" :name="field.label"
            :required="field.required"
            type="text"
            v-model="val" 
        />
    </template>

    <!-- <label v-if="!nolabel && field.type !== 'image' && field.type !== 'youtube'">{{field.name}}</label>
        
        <input v-if="field.type == 'number'" type="number" v-model="field.value">

        <select v-else-if="field.type == 'choice'" v-model="field.value">
            <option disabled value="">Choose {{field.name}}</option>

            <option v-for="(choice, index) in field.choices" :key="index" :value="choice">
                {{ choice }}
            </option>
        </select>

        <textarea v-else-if="field.type == 'long-text'" v-model="field.value" rows="5"></textarea>

        <vue-editor v-else-if="field.type == 'ws-text'" :editorToolbar="customToolbar" v-model="field.value"></vue-editor>
        
        <bc-image-field
            v-else-if="field.type == 'image'" 
            v-model="field.value"
            :url="field.value"/>
        
        
        
    -->
  </div>
</template>

<script>
import VueStarRating from 'vue-star-rating';
import autosize from 'autosize'
import BcImageField from "./components/ImageField";
import BcYoutubeField from "./components/BCYoutubeField";

// youtube-api-key="AIzaSyAq8HPrbemKw4a23McQJD9ksl2w2lGAcII"
// unsplash-client-id="17ef130962858e4304efe9512cf023387ee5d36f0585e4346f0f70b2f9729964"
// image-upload-url="upload_image.php"

const UNSPLASH_CLIENT_ID = process.env.MIX_UNSPLASH_CLIENT_ID;
const YOUTUBE_API_KEY = process.env.MIX_YOUTUBE_API_KEY;

export default {
  name: "PierEditorField",
  props: {
    field: {
        type: Object,
        default: function(){
            return {
                label: "",
                type: {},
                meta: {}
            }
        }
    },
    nolabel: Boolean,
    value: String | Number
  },
  mounted() {
    if (this.value) {
      console.log("Value changed!", this.value);
    }

    const longTextInput = this.$refs.longTextInput;
    if(longTextInput)
        autosize(longTextInput);

    // const parent = this.$root.$children[0];
    // this.imageUploadUrl = parent.imageUploadUrl;
    // this.unsplashClientId = parent.unsplashClientId;
    // this.youtubeApiKey = parent.youtubeApiKey;
  },
  data() {
    return {
      UNSPLASH_CLIENT_ID,
      YOUTUBE_API_KEY,
      val: "",
    };
  },
  watch: {
    val: function(newValue) {
        // console.log("Value changed: ", newValue);
      this.$emit("input", newValue);
    }
  },
  components: {
      VueStarRating,
      BcImageField,
      BcYoutubeField
  }
};
</script>