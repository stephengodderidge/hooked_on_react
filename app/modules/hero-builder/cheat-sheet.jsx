export const HeroBuilder = props => {
  const calcTotalsFor = {
    armor: equipment => equipment.armor * equipment.level,
    health: equipment => equipment.health * equipment.level,
    damage: equipment => equipment.damage * equipment.level,
    powerLevel: 0,
  };

  const { list, updateList } = useList([]);

  const equippedItems = props.equipment.filter(item => {
    return list.includes(item.name);
  });

  const { totals, dispatch } = useCalculateTotals(equippedItems, calcTotalsFor);

  useEffect(() => {
    /**
     * Calculate Power Level
     */
    const powerLevel = totals.armor + totals.health + totals.damage;
    dispatch(setTotalForKey('powerLevel', powerLevel));
  }, [totals.armor, totals.health, totals.damage]);

  const onValueChange = (newItem, clicked) => {
    updateList(newItem);
    dispatch(recalculateTotals(list, calcTotalsFor));
  };

  const renderHeroBuilder = () => {
    {...}
  };

  return renderHeroBuilder();
};
