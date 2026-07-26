import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'j7g2kzay',
    dataset: 'production'
  },
  studioHost: 'povracaj-akcize',
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
    appId: 'i5pq307dobz9lld6cafz3z5q',
  },
})
