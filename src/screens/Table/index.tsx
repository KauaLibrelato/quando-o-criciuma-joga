import React, {useEffect, useState} from 'react';
import {Row, Table} from 'react-native-reanimated-table';
import * as Styles from './styles';
import {getAllRowsTable, tableHeaderProps, tableRowProps} from './utils';

export function TableScreen() {
  const [rows, setRows] = useState<string[][]>([]);

  const fetchData = async () => {
    const data = await getAllRowsTable();
    setRows(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Styles.Container>
      <Styles.ChampionshipTitle>
        Campeonato Catarinense
      </Styles.ChampionshipTitle>
      <Styles.TableContainer>
        <Styles.View>
          <Table style={{borderTopLeftRadius: 8, borderTopRightRadius: 8}}>
            <Row {...tableHeaderProps} />
          </Table>
          <Styles.RowsScrollView>
            <Table>
              {rows.map((team, index) => (
                <Row key={index} {...tableRowProps(index, team)} />
              ))}
            </Table>
          </Styles.RowsScrollView>
        </Styles.View>
      </Styles.TableContainer>
    </Styles.Container>
  );
}
