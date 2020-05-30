async function main() {
  var user = await fetchCurrentUser();

  var [archivedOrders, currentOrders] = await Promise.all(
    fetchArchivedOrders(user.id),
    fetchCurrentOrders(user.id)
  );
}
