// const final = [];
// React.useEffect(() => {
//   if (selectedSizes.length === 0&&selectedColors.length===0) {
//     setFilteredProducts(products);
//   } else {
//     for (let i = 0; i < selectedSizes.length; i++) {
//       for (let j = 0; j < products.length; j++) {
//         if (
//           products[j].sizes.includes(selectedSizes[i]) &&
//           !final.includes(products[j])
//         ) {
//           final.push(products[j]);
//         }
//       }
//     }
//     for (let i = 0; i < selectedColors.length; i++) {
//       for (let j = 0; j < products.length; j++) {
//         if (
//           products[j].colors.includes(selectedColors[i]) &&
//           !final.includes(products[j])
//         ) {
//           final.push(products[j]);
//         }
//       }
//     }
//     setFilteredProducts(final);
//   }
// }, [selectedSizes,selectedColors]);
// React.useEffect(() => {
//   if (selectedColors.length === 0) {
//     setFilteredProducts(products);
//   } else {
//     for (let i = 0; i < selectedColors.length; i++) {
//       for (let j = 0; j < products.length; j++) {
//         if (
//           products[j].colors.includes(selectedColors[i]) &&
//           !final.includes(products[j])
//         ) {
//           final.push(products[j]);
//         }
//       }
//     }
//     setFilteredProducts(final);
//   }
// }, [selectedColors]);
