import trae from 'trae';
import configService from './config';

const platziMusicService = trae.create({
    baseUrl: configService.apiURL
})

export default platziMusicService