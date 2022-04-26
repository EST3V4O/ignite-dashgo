import { Box, Flex, SimpleGrid, Text, theme } from '@chakra-ui/react'
import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
})

import { Header } from "../components/Header";
import { Sidebar } from '../components/Sidebar';

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks:{
      color: theme.colors.gray[600]
    },
    categories: [
      '2021-03-10T00:00:00.000Z',
      '2021-03-11T00:00:00.000Z',
      '2021-03-12T00:00:00.000Z',
      '2021-03-13T00:00:00.000Z',
      '2021-03-14T00:00:00.000Z',
      '2021-03-15T00:00:00.000Z',
      '2021-03-16T00:00:00.000Z',
    ],
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3
    }
  },
};

const series = [
  { name: 'series1', data: [31, 120, 10, 28, 61, 18, 109] }
];

export default function Dashboard() {
  return (
    <Flex
      direction="column" h="100vh"
    >
      <Header />
      <Flex
        w="100%" my="6" maxWidth={1320} mx="auto"
        px="6"
      >
        <Sidebar />

        <SimpleGrid
          flex="1" gap="4" minChildWidth="320px"
          alignItems="flex-start"
        >
          <Box
            p={["6", "8"]} bg="gray.800" borderRadius={8}
            pb="4"
          >
            <Text
              fontSize="lg" mb="4"
            >
              Inscrito da semana
            </Text>
            <Chart
              type="area"
              height={160}
              options={options}
              series={series}
            />
          </Box>
          <Box
            p={["6", "8"]} bg="gray.800" borderRadius={8}
            pb="4"
          >
            <Text
              fontSize="lg" mb="4"
            >
              Taxa de abertura
            </Text>
            <Chart
              type="area"
              height={160}
              options={options}
              series={series}
            />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
} 
