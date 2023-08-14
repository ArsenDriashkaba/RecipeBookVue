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

const cellStyles = 'p-5 relative text-start min-w-fit-content relative';

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
        class="p-2 bg-gray-50"
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
      <tr
        v-for="row in table.getRowModel().rows"
        :key="row.id"
        class="!border-b-2 border-gray-100"
      >
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
