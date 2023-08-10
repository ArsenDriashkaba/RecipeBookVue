import { createColumnHelper } from '@tanstack/vue-table';

export const createColumn = <D>() => createColumnHelper<D>();
