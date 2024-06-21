import {
  Button,
  Checkbox,
  Heading,
  MultiStep,
  Text,
  TextInput,
} from '@ignite-ui/react'
import { NextSeo } from 'next-seo'
import { Container, Header } from '../styles'
import {
  IntervalBox,
  IntervalDay,
  IntervalInputs,
  IntervalItem,
  IntervalsContainer,
} from './styles'
import { ArrowRight } from 'phosphor-react'

export default function TimeIntervals() {
  return (
    <>
      <NextSeo title="Conecte sua agenda do Google | Ignite Call" noindex />

      <Container>
        <Header>
          <Heading as="strong">Quase lá</Heading>
          <Text>
            Defina o intervalo de horários que você está disponível em cada dia
            da semana.
          </Text>
          <MultiStep size={4} currentStep={2} />
        </Header>

        <IntervalBox as="form">
          <IntervalsContainer>
            <IntervalItem>
              <IntervalDay>
                <Checkbox>
                  <Text>Segunda-feira</Text>
                </Checkbox>
              </IntervalDay>
              <IntervalInputs>
                <TextInput size="sm" type="time" step={60} />
                <TextInput size="sm" type="time" step={60} />
              </IntervalInputs>
            </IntervalItem>
            <IntervalItem>
              <IntervalDay>
                <Checkbox>
                  <Text>Terça-feira</Text>
                </Checkbox>
              </IntervalDay>
              <IntervalInputs>
                <TextInput size="sm" type="time" step={60} />
                <TextInput size="sm" type="time" step={60} />
              </IntervalInputs>
            </IntervalItem>
          </IntervalsContainer>
          <Button type="submit">
            Próximo passo
            <ArrowRight />
          </Button>
        </IntervalBox>
      </Container>
    </>
  )
}
