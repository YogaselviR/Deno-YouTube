import { YouTube } from 'https://deno.land/x/youtube@v0.3.0/mod.ts';
import { config } from '../config/config.ts';

let obj = new YouTube(config.api_key, false);
let authObj = new YouTube(config.api_key, config.access_token);

export default {

    getVideos: async({ response}: { response: any}) => {
        const videos = await obj.videos_list({part: "snippet", chart: 'mostPopular'}).then(function(searchRes){
            return searchRes;
        });
        response.body = videos;
    },

    getVideoCategory: async({ response}: { response: any}) => {
        const category = await obj.videoCategories_list({part: "snippet", regionCode: 'IN'}).then(function(searchRes){
            return searchRes;
        });
        response.body = category;
    },

    searchVideos: async({ request, response}: { request: any, response: any}) => { 
        const reqData = await request.body();
        const val = await reqData.value;
        const videos = await obj.search_list({part: "snippet", q: val.search, order: val.order}).then(function(searchRes){
            return searchRes;
        });
        response.body = videos;
    },
    
    getLanguageList: async({ response}: { response: any}) => {
        const languages = await obj.i18nLanguages_list({ part: "snippet" }).then(function(searchRes){
            return searchRes;
        });
        response.body = languages;
    },

    getSubscriptions: async({response}: {response: any}) => {

        const subscriptions = await authObj.subscriptions_list({part: "snippet", mine: true}).then(function(searchRes){
            return searchRes;
        });
        response.body = subscriptions;
    },

    getPlayList: async({ request, response}: { request: any, response: any}) => { 
        const reqData = await request.body();
        const val = await reqData.value;
        const playlist = await authObj.playlists_list({part: "snippet", channelId: val.channelId}).then(function(searchRes){
            return searchRes;
        });
        response.body = playlist;
    },
}