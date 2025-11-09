import {resolve} from 'path';
import {defineConfig, mergeConfig} from 'vite';
import {crx, ManifestV3Export} from '@crxjs/vite-plugin';
import baseConfig, {baseBuildOptions, baseManifest} from './vite.config.base'
import viteClean from 'vite-plugin-clean';


const outDir = resolve(__dirname, 'dist_chrome');

export default mergeConfig(
    baseConfig,
    defineConfig({
        plugins: [
            viteClean({
                targetFiles: ['dist_chrome'] // 清空 dist 目录下的所有文件
            }),
            crx({
                manifest: {
                    ...baseManifest,
                    background: {
                        service_worker: 'src/pages/background/index.ts',
                        type: 'module'
                    },
                } as ManifestV3Export,
                browser: 'chrome',
                contentScripts: {
                    injectCss: true,
                }
            })
        ],
        build: {
            ...
                baseBuildOptions,
            outDir
        }
        ,
    })
)