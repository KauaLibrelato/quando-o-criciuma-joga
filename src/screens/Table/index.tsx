import React from 'react';
import {Row, Table} from 'react-native-table-component';
import {theme} from '../../styles/theme';
import * as Styles from './styles';
export function TableScreen() {
  return (
    <Styles.Container>
      <Styles.TableContainer>
        <Table>
          <Row
            borderStyle={{
              borderWidth: 1,
              borderColor: theme.colors.tableHeader,
            }}
            data={[
              'Classificação',
              'P',
              'J',
              'V',
              'E',
              'D',
              'GP',
              'GC',
              'SG',
              '%',
            ]}
            widthArr={[100, 30, 30, 30, 30, 30, 30, 30, 30, 30]}
            style={{
              height: 40,
              backgroundColor: theme.colors.tableRow,
            }}
            textStyle={{textAlign: 'center', color: theme.colors.textColor}}
          />
        </Table>
      </Styles.TableContainer>
    </Styles.Container>
  );
}
