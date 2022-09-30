import FaSearch from '@meronex/icons/fa/FaSearch'
import ZoAddSolid from '@meronex/icons/zo/ZoAddSolid'

export default function Topnav() {
  return (
    <div class="flex items-center p-5">
      <div class="flex flex-wrap">
        <span class="text-3xl font-black uppercase">Plantones</span>
        <span class="-mt-1">A Botanical Collection of Colors</span>
      </div>
      <div class="flex">
        <span class="mr-3">
          <FaSearch />
        </span>
        <span>
          <ZoAddSolid />
        </span>
      </div>
    </div>
  )
}
