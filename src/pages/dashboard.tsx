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
<<<<<<< HEAD
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      "2021-12-18T00:00:00.000Z",
      "2021-12-19T00:00:00.000Z",
      "2021-12-20T00:00:00.000Z",
      "2021-12-21T00:00:00.000Z",
      "2021-12-22T00:00:00.000Z",
      "2021-12-23T00:00:00.000Z",
      "2021-12-24T00:00:00.000Z",
    ]
=======
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
>>>>>>> 66245bf1e2c0193fa4c92b0cd906b77d7088ea5b
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3
    }
<<<<<<< HEAD
  }
}

const series = [
  { name: "series1", data: [31, 120, 10, 28, 51, 18, 109] }
]
=======
  },
};

const series = [
  { name: 'series1', data: [31, 120, 10, 28, 61, 18, 109] }
];
>>>>>>> 66245bf1e2c0193fa4c92b0cd906b77d7088ea5b

export default function Dashboard() {
  return (
    <Flex
<<<<<<< HEAD
      direction="column"
      h="100vh"
    >
      <Header />

      <Flex
        w="100%"
        my="6"
        maxWidth={1480}
        mx="auto"
=======
      direction="column" h="100vh"
    >
      <Header />
      <Flex
        w="100%" my="6" maxWidth={1320} mx="auto"
>>>>>>> 66245bf1e2c0193fa4c92b0cd906b77d7088ea5b
        px="6"
      >
        <Sidebar />

        <SimpleGrid
<<<<<<< HEAD
          flex="1"
          gap="4"
          minChildWidth="320px"
          align="flex-start"
        >
          <Box
            p={["6", "8"]}
            bg="gray.800"
            borderRadius={8}
            pb="4"
          >
            <Text
              fontSize="lg"
              mb="4"
            >
              Inscritos da semana
            </Text>
            <Chart
              options={options}
              type="area"
              series={series}
              height={160}
            />
          </Box>

          <Box
            p={["6", "8"]}
            bg="gray.800"
            borderRadius={8}
            pb="4"
          >
            <Text
              fontSize="lg"
              mb="4"
=======
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
>>>>>>> 66245bf1e2c0193fa4c92b0cd906b77d7088ea5b
            >
              Taxa de abertura
            </Text>
            <Chart
              type="area"
<<<<<<< HEAD
              options={options}
              series={series}
              height={160}
            />
          </Box>

=======
              height={160}
              options={options}
              series={series}
            />
          </Box>
>>>>>>> 66245bf1e2c0193fa4c92b0cd906b77d7088ea5b
        </SimpleGrid>
      </Flex>
    </Flex>
  )
<<<<<<< HEAD
}
=======
} 
>>>>>>> 66245bf1e2c0193fa4c92b0cd906b77d7088ea5b
