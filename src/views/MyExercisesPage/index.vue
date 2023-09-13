<template>
    <MainLayout>     
        <UiSectionHeader title="My exercises" />
        <table class="min-w-full">
          <thead class="bg-white border-b">
            <tr>
              <th class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Exercise
              </th>
              <th class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Time
              </th>
              <th class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Points
              </th>
              <th class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Tries
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-gray-100 border-b">
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Install Slack</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{{ parseInt(Math.random() * 4) }}:{{ parseInt(Math.random() * 60) }}:{{ parseInt(Math.random() * 60) }}</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{{ parseInt(Math.random() * 4) }}</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{{ parseInt(Math.random() * 4) }}</td>
            </tr>
            <tr class="bg-white border-b">
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Install VPN</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{{ parseInt(Math.random() * 4) }}:{{ parseInt(Math.random() * 60) }}:{{ parseInt(Math.random() * 60) }}</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{{ parseInt(Math.random() * 4) }}</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{{ parseInt(Math.random() * 4) }}</td>
            </tr>
            <tr class="bg-gray-100 border-b">
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Clone Repository</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{{ parseInt(Math.random() * 4) }}:{{ parseInt(Math.random() * 60) }}:{{ parseInt(Math.random() * 60) }}</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{{ parseInt(Math.random() * 4) }}</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{{ parseInt(Math.random() * 4) }}</td>
            </tr>
            <tr class="bg-white border-b">
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Add Attribute to domain</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{{ parseInt(Math.random() * 4) }}:{{ parseInt(Math.random() * 60) }}:{{ parseInt(Math.random() * 60) }}</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{{ parseInt(Math.random() * 4) }}</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{{ parseInt(Math.random() * 4) }}</td>
            </tr>        

          </tbody>
        </table>
    </MainLayout>
  </template>
  
  <script>
  import MainLayout from '@/components/App/MainLayout.vue';
  import UiSectionHeader from '@/components/Ui/SectionHeader.vue'

  export default {
    name: 'MyExercisesPage',
  
   
    components: {
      MainLayout,
      UiSectionHeader,
    },
  
  }
  </script>
  