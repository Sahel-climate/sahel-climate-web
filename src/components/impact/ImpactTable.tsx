import type { ImpactRow } from "./types/impact.types";

interface ImpactTableProps {
  title: string;
  columns: string[];
  rows: ImpactRow[];
  notReported: string;
}

const ImpactTable = ({
  title,
  columns,
  rows,
  notReported,
}: ImpactTableProps) => {
  return (
    <div className="min-w-0">
      <h3 className="font-display text-xl font-bold text-millet-500">
        {title}
      </h3>

      <div className="mt-4 overflow-x-auto">
        <table
          aria-label={title}
          className="w-full min-w-[34rem] border-collapse text-start"
        >
          <thead>
            <tr className="border-b border-paper/30 font-display text-sm font-bold text-paper/70">
              {columns.map((column, index) => (
                <th
                  key={column}
                  scope="col"
                  className={`py-3 ${
                    index === 0 ? "pe-4" : "px-2 text-end"
                  } font-bold`}
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows.map((row) => (
              <tr key={row[0]} className="border-b border-paper/15">
                <th
                  scope="row"
                  className="py-3.5 pe-4 text-start font-body text-[1rem] font-normal leading-snug"
                >
                  {row[0]}
                </th>

                {row.slice(1).map((value, index) => (
                  <td
                    key={index}
                    className={`px-2 py-3.5 text-end font-display font-bold tabular-nums ${
                      value === notReported
                        ? "text-sm font-medium text-paper/45"
                        : ""
                    }`}
                  >
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ImpactTable;
