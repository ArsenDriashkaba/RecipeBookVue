<script setup lang="ts" generic="TableRow">
import {
  ColumnDef,
  FlexRender,
  getCoreRowModel,
  useVueTable,
} from '@tanstack/vue-table';

type Props = {
  data: TableRow[];
  columns: ColumnDef<TableRow>[];
};

const props = defineProps<Props>();

const cellStyles = 'p-5 relative text-start';

const table = useVueTable({
  get data() {
    return props.data;
  },
  get columns() {
    return props.columns;
  },
  getCoreRowModel: getCoreRowModel(),
});
</script>

<template>
  <table class="shadow-md w-full">
    <thead>
      <tr
        v-for="headerGroup in table.getHeaderGroups()"
        :key="headerGroup.id"
        class="p-2"
      >
        <th
          v-for="header in headerGroup.headers"
          :key="header.id"
          :class="cellStyles"
        >
          <FlexRender
            :render="header.column.columnDef.header"
            :props="header.getContext()"
          />
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in table.getRowModel().rows" :key="row.id">
        <td
          v-for="cell in row.getVisibleCells()"
          :key="cell.id"
          :class="cellStyles"
        >
          <FlexRender
            :render="cell.column.columnDef.cell"
            :props="cell.getContext()"
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>
