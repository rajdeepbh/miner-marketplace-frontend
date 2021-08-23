import {
  Heading,
  Stack,
  VStack,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  HStack,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import * as Fathom from "fathom-client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { GetFormattedFILUnits, GetSimpleFILUnits } from "../../util/util";

function PredictedEarnings(props) {
  const [filecoinUSDRate, setFilecoinUSDRate] = useState(0);

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=filecoin&vs_currencies=usd"
    )
      .then((res) => res.json())
      .then((r) => {
        //console.log(r.filecoin.usd);
        setFilecoinUSDRate(r.filecoin.usd);
      });
  }, []);

  return (
    <>
      <VStack textAlign="left" alignItems="left" pb="24">
        <Heading size="lg" color="blue.700" my={6} pl="4">
          Predicted Earnings
        </Heading>

        <Stack>
          <VStack alignItems="left">
            <Accordion allowMultiple>
              <AccordionItem py={2}>
                <h2>
                  <AccordionButton>
                    <Stat alignItems="left" textAlign="left">
                      <StatLabel fontSize="md" color="gray.600" mb="2">
                        Total Estimated Income (next 60 days)
                      </StatLabel>
                      <StatNumber
                        color="green.600"
                        fontWeight="normal"
                        fontSize="3xl"
                      >
                        {GetSimpleFILUnits(props.totalIncome)}
                      </StatNumber>
                      <StatHelpText>$filecoinToUSDRate</StatHelpText>
                    </Stat>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <HStack
                    textAlign="left"
                    alignItems="left"
                    justify="space-between"
                  >
                    <Stack>
                      <Text fontSize="md" color="gray.600">
                        Existing Deals:
                      </Text>
                      <Text color="gray.700" fontWeight="medium" fontSize="lg">
                        {GetSimpleFILUnits(props.existing)}
                      </Text>
                      <Text color="gray.600">$filecoinToUSDRate</Text>
                    </Stack>
                    <Stack>
                      <Text fontSize="md" color="gray.600">
                        Potential Future Deals:
                      </Text>
                      <Text color="gray.700" fontWeight="medium" fontSize="lg">
                        {GetSimpleFILUnits(props.potential)}
                      </Text>
                      <Text color="gray.600">$filecoinToUSDRate</Text>
                    </Stack>
                    <Stack>
                      <Text fontSize="md" color="gray.600">
                        Block Rewards:
                      </Text>
                      <Text color="gray.700" fontWeight="medium" fontSize="lg">
                        {GetSimpleFILUnits(props.blockRewards)}
                      </Text>
                      <Text color="gray.600">$filecoinToUSDRate</Text>
                    </Stack>
                    <Stack>
                      <Text fontSize="md" color="gray.600">
                        Days until eligible for block rewards:
                      </Text>
                      <Text color="gray.700" fontWeight="medium" fontSize="lg">
                        {props.days}
                      </Text>
                    </Stack>
                  </HStack>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem py={2}>
                <h2>
                  <AccordionButton>
                    <Stat textAlign="left">
                      <StatLabel fontSize="md" color="gray.600" mb="2">
                        Total Estimated Expenditure (next 60 days)
                      </StatLabel>
                      <StatNumber
                        color="red.600"
                        fontWeight="normal"
                        fontSize="3xl"
                      >
                        {GetSimpleFILUnits(props.totalExpenditure)}
                      </StatNumber>
                      <StatHelpText>$filecoinToUSDRate</StatHelpText>
                    </Stat>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <HStack
                    textAlign="left"
                    alignItems="left"
                    justify="space-between"
                  >
                    <Stack>
                      <Text fontSize="md" color="gray.600">
                        Collateral Deposit:
                      </Text>
                      <Text color="gray.700" fontWeight="medium" fontSize="lg">
                        {GetSimpleFILUnits(props.deposits)}
                      </Text>
                      <Text color="gray.600">$filecoinToUSDRate</Text>
                    </Stack>
                    <Stack>
                      <Text fontSize="md" color="gray.600">
                        Gas:
                      </Text>
                      <Text color="gray.700" fontWeight="medium" fontSize="lg">
                        {GetSimpleFILUnits(props.gas)}
                      </Text>
                      <Text color="gray.600">$filecoinToUSDRate</Text>
                    </Stack>
                    <Stack>
                      <Text fontSize="md" color="gray.600">
                        Penalty:
                      </Text>
                      <Text color="gray.700" fontWeight="medium" fontSize="lg">
                        {GetSimpleFILUnits(props.penalty)}
                      </Text>
                      <Text color="gray.600">$filecoinToUSDRate</Text>
                    </Stack>
                    <Stack>
                      <Text fontSize="md" color="gray.600">
                        Others:
                      </Text>
                      <Text color="gray.700" fontWeight="medium" fontSize="lg">
                        {GetSimpleFILUnits(props.others)}
                      </Text>
                      <Text color="gray.600">$filecoinToUSDRate</Text>
                    </Stack>
                  </HStack>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

            <Stat pl={4}>
              <StatLabel fontSize="md" color="gray.600" mb="2">
                Net Estimated Earnings (next 60 days)
              </StatLabel>
              <StatNumber color="blue.700" fontWeight="normal" fontSize="3xl">
                {GetSimpleFILUnits(props.netEarnings)}
              </StatNumber>
              <StatHelpText>$filecoinToUSDRate</StatHelpText>
            </Stat>
          </VStack>
        </Stack>
      </VStack>
    </>
  );
}

export default PredictedEarnings;
